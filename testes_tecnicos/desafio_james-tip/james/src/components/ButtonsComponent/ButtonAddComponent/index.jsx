import { useContext } from 'react';
import GlobalStateContext from '../../../global/GlobalStateContext';
import AddModal from '../../../layout/Modals/AddModal/AddModal';

import IconButton from '@mui/material/IconButton';

import { ButtonIcon } from './styles';

function ButtonAddComponent({ text }) {
	const { open, setOpen } = useContext(GlobalStateContext);

	return (
		<main>
		
			<AddModal open={open} callFunction={() => setOpen(false)} />
			<section onClick={() => setOpen(true)}>
				<IconButton aria-label="Add">
					<ButtonIcon/>
				</IconButton>
				<span>{text}</span>
			</section>
		</main>
	);
}

export default ButtonAddComponent;
