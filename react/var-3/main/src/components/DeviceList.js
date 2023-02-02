import { useState } from 'react'
import AddDevice from './AddDevice'

const DeviceList = () => {
	const [devices, setDevices] = useState([])
	
	const onDeviceAdded = (device) => {
		setDevices([...devices, device])
	}
    
	return (
		<div>
			<AddDevice onAdd={onDeviceAdded}/>
		</div>
	)
}

export default DeviceList