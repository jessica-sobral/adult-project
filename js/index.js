document.addEventListener("DOMContentLoaded",
	function (event) {
		const showNavbar = (toggleId, navId, bodyId, headerId) => {
			const toggle = document.getElementById(toggleId),
				nav = document.getElementById(navId),
				bodypd = document.getElementById(bodyId),
				headerpd = document.getElementById(headerId)

			if (toggle && nav && bodypd && headerpd) {
				toggle.addEventListener('click', () => {
					nav.classList.toggle('show')
					toggle.classList.toggle('bx-x')
					bodypd.classList.toggle('body-pd')
					headerpd.classList.toggle('body-pd')
				})
			}
		}

		showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

		const linkColor = document.querySelectorAll('.nav_link')

		function colorLink() {
			if (linkColor) {
				linkColor.forEach(l => l.classList.remove('active'))
				this.classList.add('active')
			}
		}
		linkColor.forEach(l => l.addEventListener('click', colorLink))

		const grafico1 = new Chart(createContext ('grafico1'), {
			type: "doughnut",
			data: createData(["Mulheres", "Homens"],
				'%',
				[33.07945, 66.92055],
				["#4BC0C0", "#FFCD56"]),
			options: createOptions('1. Proporção de homens e mulheres no Data Set Adult', 'bottom'),
		});

		const grafico2 = new Chart(createContext ('grafico2'), {
			type: "pie",
			data: createData(["Brancos", "Negros", "Asiáticos", "Esquimós", "Outros"],
				'%',
				[85.42735, 9.59430, 3.19093, 0.95513, 0.83228],
				['#4BC0C0',
				'#FFCD56',
				'#FF6384',
				'#C9CBCF',
				'#36A2EB']),
			options: createOptions('2. Proporção das raças no Data Set Adult', 'bottom'),
		});
	}
);