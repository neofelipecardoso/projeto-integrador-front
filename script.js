document.addEventListener('DOMContentLoaded', () => {
	const mostrarsenha = document.getElementById('mostrarsenha');
	const password = document.getElementById('password');
	const loginbtn = document.getElementById('loginbtn');
	const email = document.getElementById('email');

	if (mostrarsenha && password) {
		mostrarsenha.addEventListener('change', () => {
			password.type = mostrarsenha.checked ? 'text' : 'password';
		});
	}

	if (loginbtn && email && password) {
		const tryLogin = () => {
			const emailVal = email.value.trim();
			const passVal = password.value.trim();
			if (emailVal && passVal) {
				window.location.href = 'dashboard.html';
			} else {
				alert('Por favor, preencha o email e a senha.');
			}
		};

		loginbtn.addEventListener('click', (e) => {
			e.preventDefault();
			tryLogin();
		});

		[email, password].forEach((input) => {
			input.addEventListener('keydown', (e) => {
				if (e.key === 'Enter') {
					e.preventDefault();
					tryLogin();
				}
			});
		});
	}
});