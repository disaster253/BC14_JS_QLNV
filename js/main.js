var listStaff = JSON.parse(localStorage.getItem("listStaff")) || [];
function updateForm(staff) {
	document.getElementById("tknv").value = staff.account || "";
	document.getElementById("name").value = staff.fullName || "";
	document.getElementById("email").value = staff.email || "";
	document.getElementById("password").value = staff.password || "";
	document.getElementById("datepicker").value = staff.date || "";
	document.getElementById("luongCB").value = staff.salary || "";
	document.getElementById("chucvu").value = staff.position || "";
	document.getElementById("gioLam").value = staff.workingHours || "";
};
var manager = new Manager();//không định nghĩa đc hàm 
function addStaff() {
	var account = document.getElementById("tknv").value;
	var fullName = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var date = document.getElementById("datepicker").value;
	var salary = +document.getElementById("luongCB").value;
	var position = document.getElementById("chucvu").value;
	var workingHours = +document.getElementById("gioLam").value;

	var staff = new Staff(account, fullName, email, password, date, salary, position, workingHours);
	var isValid = authentication(staff);
	if (!isValid) {
		return;
	}
	manager.addStaff(staff);
	showDisplay(staff.listStaff);
	resetForm();
}
function updateStaff() {
	var account = document.getElementById("tknv").value;
	var fullName = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var date = document.getElementById("datepicker").value;
	var salary = +document.getElementById("luongCB").value;
	var position = document.getElementById("chucvu").value;
	var workingHours = +document.getElementById("gioLam").value;

	var staff = new Staff(account, fullName, email, password, date, salary, position, workingHours);
	var isValid = authentication(staff);
	if (!isValid) {
		return;
	}
	manager.addStaff(staff);
	showDisplay(staff.listStaff);
	resetForm();
}
function removeStaff(account) {
	staff.xoaSinhVien(account);
	showDisplay(staff.listStaff);
}

function searchStaff() {
	var search = document.getElementById("searchName").value;
	var newListStaff = staff.searchStaff(search);
	showDisplay(newListStaff);
}
function authentication(staff) {
	var validator = new Validator();
	var isValid =
		validator.isRequired("tbTKNV", staff.account) &&
		validator.accountCheck("tbTKNV", staff.account);
	isValid &=
		validator.isRequired("tbTen", staff.fullName) &&
		validator.fullNameCheck("tbTen", staff.fullName);
	isValid &=
		validator.isRequired("tbEmail", staff.email) &&
		validator.emailCheck("tbEmail", staff.email);
	isValid &=
		validator.isRequired("tbMatKhau", staff.password) &&
		validator.passwordCheck("tbMatKhau", staff.password);
	isValid &= validator.isRequired("tbNgay", staff.date);
	isValid &=
		validator.isRequired("tbLuongCB", staff.salary) &&
		validator.salaryCheck("tbLuongCB", staff.salary);
	isValid &= validator.isRequired("tbChucVu", staff.position);
	isValid &=
		validator.isRequired("tbGiolam", staff.workingHours) &&
		validator.workingHoursCheck("tbGiolam", staff.workingHours);

	if (!isValid) {
		for (let key in validator.errors) {
			if (validator.errors[key]) {
				document.getElementById(key).style.display = "block";
				document.getElementById(key).innerHTML = validator.errors[key];
			}
		}
		return false;
	}
	return true;
}
function showDisplay(listStaff) {
	var tbody = document.getElementById("tableDanhSach");
	var html = "";
	for (var i = 0; i < listStaff.length; i += 1) {
		html += `
		<tr>
		  <td>${listStaff[i].account}</td>
		  <td>${listStaff[i].fullName}</td>
		  <td>${listStaff[i].email}</td>
		  <td>${listStaff[i].date}</td>
		  <td>${listStaff[i].position}</td>
		  <td>${listStaff[i].calTotalSalary()}</td>
		  <td>${listStaff[i].staffAssessment()}</td>
		  <td>
			<button class="btn btn-primary" data-action="select" data-account="${listStaff[i].account
			}">Update</button>
			<button class="btn btn-danger" data-action="delete" data-account="${listStaff[i].account
			}">Delete</button>
		  </td>
		</tr>
	  `;
	}

	tbody.innerHTML = html;
}
function resetForm() {
	updateForm({});
	document.getElementById("tknv").disabled = false;
	document.getElementsByClassName("sp-thongbao").style.display = "none";
}

function delegation(event) {
	var account = event.target.getAttribute("data-account")
	var action = event.target.getAttribute("data-action")

	if (action === "select") {
		selectStaff(account);
	}
	if (action === "delete") {
		removeStaff(account);
	}
}
function selectStaff(account) {
	SelectStaff = manager.selectStaff(account);
	document.getElementById("tknv").disabled = true;
	updateForm(staff);
}

manager.init();
showDisplay(manager.listStaff);
document.getElementById("tableDanhSach").addEventListener("click", delegation);
document.getElementById("btnThemNV").addEventListener("click", addStaff);
document.getElementById("btnCapNhat").addEventListener("click", updateStaff);
document.getElementById("btnTimNV").addEventListener("click", searchStaff);
//