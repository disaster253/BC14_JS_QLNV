document.getElementById("btnThemNV").addEventListener("click", addStaff)
document.getElementById("btnCapNhat").addEventListener("click", updateStaff)
document.getElementById("tableDanhSach").addEventListener("click", delegation);
document.getElementById("btnTimNV").addEventListener("click", searchStaff);
var listStaff = JSON.parse(localStorage.getItem("listStaff")) || [];
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

	staff.addStaff(staff)
}
function xoaSinhVien(account) {
	qlsv.xoaSinhVien(account);
	hienThi(qlsv.dssv);
}

function timKiemSinhVien() {
	var search = document.getElementById("txtSearch").value;
	var newDssv = qlsv.timKiemSinhVien(search);
	hienThi(newDssv);
}
function showDisplay(listStaff) {
	var tbody = document.getElementById("tbodySinhVien");
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
			<button class="btn btn-primary" data-action="select" data-masv="${listStaff[i].account
			}">Update</button>
			<button class="btn btn-danger" data-action="delete" data-masv="${listStaff[i].account
			}">Delete</button>
		  </td>
		</tr>
	  `;
	}

	tbody.innerHTML = html;
}