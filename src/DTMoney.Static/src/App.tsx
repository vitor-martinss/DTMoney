import Modal from 'react-modal'
import { useState } from 'react'
import { Header } from './components/Header' 
import { NewTransactionModal } from './components/NewTransactionModal' 
import { Dashboard } from './components/Dashboard' 
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState<boolean>(false)

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true)
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false)
	}

	return (
		<>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />
			<NewTransactionModal 
				isOpen={isNewTransactionModalOpen} 
				onRequestClose={handleCloseNewTransactionModal}
			/>
			<GlobalStyle />
		</>
	);
}
