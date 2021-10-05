import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--background: #f0f2f5;
		--white: #fff;
		--red: #e52e4d;
		--green: #33cc95;
		--blue: #5429cc;
		--blue-light: #6933ff;
		--text-tile: #363f5f;
		--text-body: #969cb3;
		--shape: #ffffff;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;

		@media (max-width: 1860px) {
			font-size: 93.95%; // 15px
		}

		@media (max-width: 720px) {
			font-size: 87.5%; // 14px
		}
	}

	body {
		background: var(--background);
		-webkit-font-smoothing: antialiased;
	}

	border-style, input, textarea, button {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}
	
	h1, h2, h3, h4, h5, h6, strong { 
		font-weight: 600;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.react-modal-overlay {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.react-modal-content {
		width: 100%;
		max-width: 576px;
		background-color: var(--background);
		position: relative;
		padding: 3rem;
		border-radius: .24rem;
	}

	.react-modal-close {
		position: absolute;
		right: 1.5rem;
		top: 1.5rem;
		border: 0;
		background: transparent;
		transition: .2s;

		&:hover {
			filter: brightness(.8);
		}
	}

`
