import React, { useEffect, useMemo } from "react"
import { SignUpResponse,SignInParam, SignInResponse, Roles, AuthState, AuthApi, LoginBase } from './type.auth'
import { User } from './type.user'
import { SubType } from '../../type/type.app'
import { userReducer } from './UserReducer'
import { CONTEXT_ACTIONS } from '../../asset/constant/Actions'
import { useUser, useFetchApi } from '../../service/hook/index'
import { UserUpdateParam } from '../../type/type.user'
import AsyncStorage from '@react-native-community/async-storage'
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
import { ApiList } from '../../asset/constant/Api'

const UserStateCtx= React.createContext<AuthState>({} as AuthState)
const UserDispatchCtx= React.createContext<AuthApi>({} as AuthApi)

type TokenStorageType={
  key: 'accessToken'
  value: string
}

function UserProvider({ children }:{children: React.ReactNode}) {
    const { getApi, postApi }= useFetchApi()
    const { updateUserAsUser }= useUser()

    const initialState:AuthState= {
      useMocked: true,
      role: null, // 'User' | 'Manager'
      token: 'test', // string
      refreshToken: 'test', // string
      loading: true,
      user: mocked_User,  // mockedUser
      manager: null //mocked_Manager  // mockedManager
    }

    const [state, dispatch] = React.useReducer(userReducer, initialState);
    const [loading,setLoading]= React.useState<boolean>(true)
    
    async function handleStorage(){
      try{
        console.log('handleStorage called',state)
        if(state.token)
          await api.setStorage({key:'accessToken', value: state?.token })
      }catch(e){
        console.log(e)
      }
    }

    useEffect(() => {
      handleStorage()
    },[state.token])

    const api = useMemo(() => {	

      async function clearStorage(){
        try{
          await AsyncStorage.clear()
        }catch(e){
          console.log(e)
        }
      }

      async function checkAuth ():Promise<SubType<AuthState,'token'>|null>{
        try {
          const response = await getStorage()
          if(response!==null){
            const { token } = response
            dispatch({ 
              type: CONTEXT_ACTIONS.AUTH.RESTORE_TOKEN,
              payload: {
                token
              }
            })
          }
          return response
        } catch (error) {
          return null
        }
      }

      async function setStorage({key,value}:TokenStorageType):Promise<void>{
        try{
          console.log('setStorage called')
          const val:string= JSON.stringify(value)
          console.log('setStorage value',val)
          const response= await AsyncStorage.setItem(key, val)
          console.log('AsyncStorage response:',response)
        }catch(e){
          console.log(e)
        }
      }

      async function getStorage():Promise<SubType<AuthState,'token'>|null>{
        try{
          console.log('getStorage called')
          const authDataSerialized = await AsyncStorage.getItem('@AuthData')
          if (authDataSerialized) {      
            return await JSON.parse(authDataSerialized);
          }
          return  null
        }catch(e){
          console.log(e)
          return null        
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
          const token=null 
          if(role==='User'){
            return {
              user: mocked_User,
              token: '123',
              refresh_token: '567'
            }
            //return await postApi<Api_AuthUserSignIn,LoginBase>(auth.loginUser.url,token,data)		
          }
          if(role==='Manager'){
            return {
              manager: mocked_Manager,
              token: '123',
              refresh_token: '567'
            }
            //return await postApi<Api_AuthManagerSignIn,LoginBase>(auth.loginManager.url,token,data)		
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
          const token=null 
          if(role==='User'){
            return {
              user: 'newUserId'
            }
            //return await postApi<Api_AuthUserSignUp,LoginBase>(auth.registerUser.url,token,data)		
          }else if(role==='Manager'){
            return {
              manager: 'newManId'
            }
            //return await postApi<Api_AuthManagerSignUp,LoginBase>(auth.registerManager.url,token,data)		
          }else return null
          
        } catch (error) {
          return null
        }
      }
      
      async function updateUser(id:User['_id'],param: { type: UserUpdateParam, value: string}):Promise<ApiResponseVals>{
        try{
          //CALL UPDATE USER API
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
          const token=null 
          /*
          const response= await postApi<Api_AuthVerify,LoginBase>(auth.verify.url,token,code)		
          if(response){
            return ApiResponse.verify.success
          }*/
          return ApiResponse.verify.success
        }catch(e){
          console.log(e)
          return ApiResponse.verify.fail
        }
      }

      async function onPwUpdate(pw:Api_AuthPwUpdate_Param):Promise<Api_AuthPwUpdate>{
        try{
          /*
          const token=null 
          const response= await postApi<Api_AuthPwUpdate,Api_AuthPwUpdate_Param>(auth.pwUpdate.url,token,pw)		
          if(response){
            return ApiResponse.pwUpdate.success
          }*/
          return ApiResponse.pwUpdate.success
        }catch(e){
          console.log(e)
          return ApiResponse.verify.fail
        }
      }

      async function getVC():Promise<ApiResponseVals>{
        try{
          /*
          const token=null 
          const data= null 
          const urlString= `${auth.getVC.url}`
          const response:Api_AuthVC|null= await postApi<Api_AuthVC,Api_AuthVC_Param>(urlString,token,data)		
          if(response===null)
            return ApiResponse.vc.fail
          else return ApiResponse.vc.success
          */      
          return ApiResponse.vc.success
        }catch(e){
          console.log(e)
          return ApiResponse.vc.fail
        }
      }

      async function signOut():Promise<Api_AuthSignOut>{
        try{
          const token=null 
          /*
          const urlString= `${auth.signOut.url}`
          const response= await postApi<Api_AuthSignOut,Api_AuthSignOut_Param>(urlString,token,{id})		
          if(response){
            return ApiResponse.pwUpdate.success
          }
          */
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
        handleSignIn,
        handleSignInDispatch,
        onPwUpdate,
        signIn,
        signOut,
        signUp,
        updateUser,
        verifyCode,
        getVC,
        setStorage,
        getStorage,
        checkAuth,
        clearStorage
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