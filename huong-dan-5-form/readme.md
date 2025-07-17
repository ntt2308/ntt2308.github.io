Trong chương này, mình sẽ cùng bạn tạo 2 trang website đăng kí lớp học:
A. register.html (trang điền thông tin đăng kí)
B. confirm.html (trang xác nhận và thanh toán)

---

A. register.html:
Đây là trang đăng kí gồm form đăng kí để người dùng điền thông tin và chọn lớp học, trang này gồm các mục sau đây:
Firstname
Lastname
Email
Phone number
Age
Status (chỉ chọn 1: highschool, university, working hoặc retired)
Courses (có thể chọn nhiều trong 6 lớp học của Dũng)
Payment type (paypal, creditcard)
Sau đây là các điều kiện cần thỏa mãn, nếu không thỏa mãn, người dùng sẽ không submit được form, trang web sẽ hiển thị lỗi và yêu cầu người dùng nhập lại:
R1: Firstname và Lastname chỉ gồm các chữ cái, không được có số hoặc kí tự đặc biệt, tổng số kí tự phải dưới 30
R2: Email phải có kí tự @
R3: Phone number phải bắt đầu bởi +84 hoặc 0, sau đó là 9 hoặc 10 chữ số
R4: Age phải là số nguyên, tối đa là 150
R5: Nếu phần status là highschool thì age bắt buộc phải nhỏ hơn hoặc bằng 18

---

**B. confirm.html **
Trang này hiển thị những thông tin được người dùng nhập từ trang register.html, thông tin được chuyển từ register.html sang confirm.html bằng session storage
Trang payment hiển thị tổng số tiền phải trả, số tiền được cộng dồn từ các lớp học mà người dùng đăng kí ở trang trước, ngoài ra có thêm các logic sau:
Giảm giá 20% nếu người dùng đăng kí 3 lớp hoặc hơn
Giảm 10% nếu người đăng kí là đang ở highschool
Nếu người dùng chọn paypal, tăng tổng giá tiền lên 5%
Sau khi người dùng đã xác nhận mọi thông tin và xác nhận, submit toàn bộ form data lên https://mercury.swin.edu.au/it000000/formtest.php bằng phương thức POST để hiện thị toàn bộ các mục đó dưới dạng table.
Nếu người dùng thấy có thông tin cá nhân chưa đúng, bấm cancel để quay về trang register, trang này sẽ prefill toàn bộ thông tin người dùng đã nhập trước đó
