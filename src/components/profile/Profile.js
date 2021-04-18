import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import {ProfileDropdown} from './profiledropdown/ProfileDropdown'
import './Profile.css'

export const Profile = () => {
	const [authenticatedUser,] = useContext(UserContext)

	return (
		<div className='profileWrapper'>
			< img className='profileImg' src={'https://thispersondoesnotexist.com/image'} alt='error...'/>
			<span>{authenticatedUser}</span>
			<ProfileDropdown/>

		</div>
	)
}