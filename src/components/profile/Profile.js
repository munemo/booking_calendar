import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'

export const Profile = () => {
	const [authenticatedUser,] = useContext(UserContext)

	return (
		<div className='profileWrapper'>
			<span className='profileImg' src={''} alt='error...'> {authenticatedUser}</span>
		</div>
	)
}