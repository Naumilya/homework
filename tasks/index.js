// ? 1
// let user = {
// 	name: 'John',
// 	age: 30,
// }

// console.log(Object.hasOwn(user, 'age'))

// ? 2
// let userName = ''

// let users = [
// 	{
// 		name: 'John',
// 		age: 30,
// 	},
// 	{
// 		name: 'Bob',
// 		age: 21,
// 	},
// 	{
// 		name: 'Anna',
// 		age: 19,
// 	},
// ]

// users.forEach(user =>
// 	user.name === 'Bob' ? (userName = 'Bob') : (userName = null)
// )

// console.log(userName)

// ? 3

// console.log(users.filter(user => user.name !== 'Anna'))

// ? 4

// console.log(users.sort((a, b) => a.age - b.age))

// ? 5

// const orders = [
// 	{
// 		id: '24003874339',
// 		status: 'Передано в SAP',
// 		statusChangeTime:
// 			'Sun Oct 24 2021 10:24:00 GMT+0300 (Москва, стандартное время)',
// 	},
// 	{
// 		id: '010001247991',
// 		status: 'Доставлен',
// 		statusChangeTime:
// 			'Mon May 24 2021 11:59:00 GMT+0300 (Москва, стандартное время)',
// 	},
// 	{
// 		id: '13030778733',
// 		status: 'Ожидает оплаты',
// 		statusChangeTime:
// 			'Mon Oct 25 2021 15:45:00 GMT+0300 (Москва, стандартное время)',
// 	},
// 	{
// 		id: '010001247987',
// 		status: 'Аннулирован',
// 		statusChangeTime:
// 			'Thu Dec 12 2019 19:52:00 GMT+0300 (Москва, стандартное время)',
// 	},
// 	{
// 		id: 'DB000006008',
// 		status: 'Новый',
// 		statusChangeTime:
// 			'Mon Oct 25 2021 16:50:00 GMT+0300 (Москва, стандартное время)',
// 	},
// ]

// const statuses = ['Новый', 'Ожидает оплаты', 'Передано в SAP', 'Доставлен']
// const nonChangebleStatuses = ['Доставлен', 'Аннулирован']

// function changeStatus(orderId) {
// 	let order = orders.find(order => order.id === orderId)

// 	if (!order) {
// 		return {
// 			status: 'error',
// 			massage: `Заказ с "${orderId}" не найден`,
// 		}
// 	}

// 	if (nonChangebleStatuses.includes(order.status)) {
// 		return {
// 			status: 'error',
// 			massage: `Ошибка статус заказа "${orderId}" не может быть изменен, потому что "${order.status}"`,
// 		}
// 	}

// 	const currentStatusIndex = statuses.indexOf(order.status)

// 	if (currentStatusIndex === -1 || currentStatusIndex === statuses.length - 1) {
// 		return {
// 			status: 'error',
// 			message: `Статус заказа "${orderId}" не может быть изменен из-за отсутствия следующего статуса.`,
// 			statusChangeTime: order.statusChangeTime,
// 		}
// 	}

// 	const newStatus = statuses[currentStatusIndex + 1]

// 	order.status = newStatus
// 	order.statusChangeTime = new Date().toString()

// 	return {
// 		status: 'success',
// 		massage: `Статус заказа "${orderId}" изменен на "${newStatus}"`,
// 	}
// }

// console.log(changeStatus('DB000006008'))
// console.log(changeStatus('010001247987'))
// console.log(changeStatus('123456789012'))

// ? 6

// function plural(n) {
//   return n != 1;
// }

// console.log(plural(0.5))
// console.log(plural(1))
// console.log(plural(100))

// ? 7

function dirReduc(arr) {
	const opposite = {
		NORTH: 'SOUTH',
		SOUTH: 'NORTH',
		WEST: 'EAST',
		EAST: 'WEST',
	}

	return arr.reduce((acc, val) => {
		opposite[acc[acc.length - 1]] === val ? acc.pop(val) : acc.push(val)
		return acc
	}, [])
}

console.log(
	dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']) //	['WEST']
)

console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST'])) //['NORTH', 'WEST', 'SOUTH', 'EAST']
