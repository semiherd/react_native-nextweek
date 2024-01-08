import React from "react"
import AuthLayout from '../AuthLayout'
import VerifyHeader from './VerifyHeader'
import VerifyContent from './VerifyContent'
import TitleItem from '../TitleItem'

const VerifyEmail = () => {
	const version=0
	return (
		<AuthLayout 
			head={<VerifyHeader />}
			title={<TitleItem version={version} name={`VerifyEmail`} /> }
			content={<VerifyContent />}
		/>
	)
}

export default VerifyEmail;
