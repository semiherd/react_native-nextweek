import React, { useEffect, useMemo } from "react"
import { SignUpResponse,SignInParam, SignInResponse, Roles, AuthState, AuthApi, LoginBase, StorageType, TokenStorageType } from './type.auth'
import { User,Manager } from './type.user'
import { userReducer } from './UserReducer'
import { CONTEXT_ACTIONS } from '../../asset/constant/Actions'
import { useUser, useFetchApi } from '../../service/hook/index'
import { UserUpdateParam } from '../../type/type.user'
import { ApiResponse, ApiResponseVals } from "../../type/type.api"
import { 
  Api_AuthVC,
  Api_AuthVC_Param,
  Api_AuthSignOut_Param,
  Api_AuthSignOut,
  Api_AuthPwUpdate_Param,
  Api_AuthPwUpdate,
  Api_AuthVerify,
  Api_AuthVerify_Param,
  Api_AuthUserSignIn,
  Api_AuthManagerSignIn,
  Api_AuthUserSignIn_Param,
  Api_AuthManagerSignIn_Param,
  Api_AuthUserSignUp,
  Api_AuthManagerSignUp,
  Api_AuthUserSignUp_Param
} from "./type.auth"
import { 
  mocked_User, mocked_Manager, 
} from '../../__mock__/MockedAuthUser'
import { useAxiosPriv } from '../../service/hook/UseAxiosPriv'
import { ApiList } from '../../asset/constant/Api'

const UserStateCtx= React.createContext<AuthState>({} as AuthState)
const UserDispatchCtx= React.createContext<AuthApi>({} as AuthApi)

function UserProvider({ children }:{children: React.ReactNode}) {
    
    const { getApi, postApi }= useFetchApi()
    const { updateUserAsUser }= useUser()
    const axiosPriv = useAxiosPriv()

    const initialState:AuthState= {
      useMocked: true, //false to use static user data
      role: null, // 'User' | 'Manager'
      tokenValid: 1000*60*60, // one-hour-validity
      token: 'test', // string  --make null to test login screen
      refreshToken: 'refresh', // string
      loading: true,
      user: null, //mocked_User, 
      manager: null //mocked_Manager
    }

    const [state, dispatch] = React.useReducer(userReducer, initialState);
    const [loading,setLoading]= React.useState<boolean>(true)
    
    const api = useMemo(() => {	
      
      async function refreshToken(t:string) : Promise<ApiResponseVals> {
        try{
          dispatch({ 
            type: CONTEXT_ACTIONS.AUTH.RESTORE_TOKEN,
            payload: {
              token: t
            }
          })
          return ApiResponse.token.success
        }catch(e){
          console.log('auth error',e)
          return ApiResponse.token.fail
        }
      }

      async function handleSignIn({role,email,password}:SignInParam) : Promise<ApiResponseVals> {
        try{
          const apiResponse= await signIn({role,email,password})
          const dispatchResponse= await handleSignInDispatch(apiResponse)
          if(dispatchResponse) return ApiResponse.signIn.success
          return ApiResponse.signIn.fail
        }catch(e){
          console.log('auth error',e)
          return ApiResponse.signIn.fail
        }
      }

      async function handleSignInDispatch(data:SignInResponse):Promise<boolean>{
        try{         
          const param= 
            data===null 
              ? null
              : 'user' in data 
                ? {
                    type: CONTEXT_ACTIONS.AUTH.SIGNIN.USER,
                    payload: { user: data.user, token: data.token, refreshToken: data.refresh_token }
                  }
                :   'manager in data'
                  ? {
                      type: CONTEXT_ACTIONS.AUTH.SIGNIN.MANAGER,
                      payload: { manager: data.manager, token: data.token, refreshToken: data.refresh_token }
                    }
                  : null
          if(param!==null){
            dispatch(param)
            return true
          }
          return false     
        }catch(e){
          return false
        }
      }

      async function signIn ({role,email,password}:SignInParam):Promise<SignInResponse> {
        try {
          const data:LoginBase= {
            email,password
          }
          
          if(role==='User'){
            if(state.useMocked){
              return {
                user: mocked_User,
                token: 'mockedToken',
                refresh_token: 'mockedRefreshToken'
              }
            }
            return await axiosPriv.post(
              ApiList.auth.loginUser.url,
              JSON.stringify(data)
            )    
          }
          if(role==='Manager'){
            if(state.useMocked){
              return {
                manager: mocked_Manager,
                token: '1mockedToken23',
                refresh_token: 'mockedRefreshToken'
              }
            }
            return await axiosPriv.post(
              ApiList.auth.loginManager.url,
              JSON.stringify(data)
            )   
          }
          return null
        } catch (e) {
          console.log(e)
          return null
        }
      }

      async function signUp ({role,name,email,password}:Api_AuthUserSignUp_Param):Promise<SignUpResponse> {
        try {
          const data:Api_AuthUserSignUp_Param= {
            name,role,email,password
          }
          if(role==='User'){
            if(state.useMocked){
              return {
                user: 'newUserId'
              }
            }
            return await axiosPriv.post(
              ApiList.auth.registerUser.url,
              JSON.stringify(data)
            ) 
          }else if(role==='Manager'){
            if(state.useMocked){
              return {
                manager: 'newManId'
              }
            }
            return await axiosPriv.post(
              ApiList.auth.registerManager.url,
              JSON.stringify(data)
            ) 
          }else return null
          
        } catch (error) {
          return null
        }
      }
      
      async function updateUser(id:User['_id'],param: { type: UserUpdateParam, value: string}):Promise<ApiResponseVals>{
        try{
          
          const response= await updateUserAsUser<typeof param.type>(id,param)
          if(response.state= ApiResponse.update.success){
            dispatch({ 
              type: CONTEXT_ACTIONS.USER.UPDATE,
              payload: {
                id,param
              }
            })
            return ApiResponse.update.success
          }else return ApiResponse.update.fail
        }catch(e){
          return ApiResponse.update.fail
        }
      }

      async function verifyCode(code:Api_AuthVerify_Param):Promise<Api_AuthVerify>{
        try{
          if(state.useMocked) return ApiResponse.verify.success      
          const response= await axiosPriv.post(
              ApiList.auth.verify.url,
              JSON.stringify(code)
            ) 
          if(response){
            return ApiResponse.verify.success
          }
          return ApiResponse.verify.fail
        }catch(e){
          console.log(e)
          return ApiResponse.verify.fail
        }
      }

      async function onPwUpdate(pw:Api_AuthPwUpdate_Param):Promise<Api_AuthPwUpdate>{
        try{
          if(state.useMocked) return ApiResponse.pwUpdate.success 
          
          const response= await axiosPriv.post(
              ApiList.auth.pwUpdate.url,
              JSON.stringify(pw)
            ) 
          if(response){
            return ApiResponse.pwUpdate.success
          }
          return ApiResponse.pwUpdate.success
        }catch(e){
          console.log(e)
          return ApiResponse.verify.fail
        }
      }

      async function getVC():Promise<ApiResponseVals>{
        try{
          if(state.useMocked) return ApiResponse.pwUpdate.success 
          const response:Api_AuthVC|null= await axiosPriv.post(
            ApiList.auth.getVC.url
          )    
          if(response===null)
            return ApiResponse.vc.fail
          else return ApiResponse.vc.success
        }catch(e){
          console.log(e)
          return ApiResponse.vc.fail
        }
      }

      async function signOut():Promise<Api_AuthSignOut>{
        try{
          if(state.useMocked) return ApiResponse.signOut.success 
          const idString:User['_id']| Manager['_id']|null= state.manager===null 
              ?state.user===null 
                ? null 
                : state.user._id
              :state.manager._id

          const response:Api_AuthSignOut= await axiosPriv.post(
            ApiList.auth.signOut.url,
            JSON.stringify(idString)
          ) 
          if(response){
            return ApiResponse.signOut.success
          }
          dispatch({
            type: CONTEXT_ACTIONS.AUTH.SIGNOUT,
            payload: { role:null, user: null, manager: null, token: null, refreshToken: null }
          })
          
          return ApiResponse.signOut.success
        }catch(e){
          console.log(e)
          return ApiResponse.signOut.fail
        }
      }

      return { 
        refreshToken,
        handleSignIn,
        handleSignInDispatch,
        onPwUpdate,
        signIn,
        signOut,
        signUp,
        updateUser,
        verifyCode,
        getVC
      }
    },[])

  return (
    <UserStateCtx.Provider value={state}>
    <UserDispatchCtx.Provider value={api}>
      {children}
    </UserDispatchCtx.Provider>
    </UserStateCtx.Provider>
  )
}

function useUserState() {
    const context = React.useContext(UserStateCtx);
    
    if (context === undefined) {
      throw new Error('useFormState must be used within a AuthProvider');
    }
    return context;
 
}

function useUserDispatch() {
    const context = React.useContext(UserDispatchCtx);
    if (context === undefined) {
      throw new Error('useFormDispatch must be used within a AuthProvider');
    }
    return context;
}

export { UserProvider, useUserState, useUserDispatch }