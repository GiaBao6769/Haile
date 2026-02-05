[title] Hướng dẫn cách đăng và quản lí bài trên web
[desc] Đây là bài viết về các công đoạn chính để đăng và quản lí bài.
[authors] Hiệu đính: Hoàng Gia Bảo, Làm không công: Hoàng Gia Bảo
[date] 04/02/2026

[HEADING] TẠO BÀI VIẾT
Đầu tiên, vào folder journals và tạo folder bài viết. Trong folder, tạo 1 file journal.md và 1 folder images. File markdown (.md) sẽ là nơi ta viết bài, còn folder images sẽ là nơi ta lưu trữ ảnh sử dụng trong bài viết. Lưu ý, tên ảnh phải không được chứa khoảng trắng.

[heading] CÁC TAG TRONG BÀI VIẾT
Tags là câu lệnh chung để chương trình hiểu và chuyển hóa nội dung thành bài viết trên web. Một tag đầy đủ sẽ có cấu trúc "[tên tag] Nội dung".

<b>Nhan đề:</b> [title]
<b>Mô tả:</b> [desc]
<b>Tác giả</b> [authors]
[tab] [authors] vai trò: tên tác giả
Một bài viết có thể có nhiều tác giả, nên bạn có thể thêm nhiều  người và cụ thể hóa chức danh của từng người bằng cấu trúc sau:
[tab] [authors] tên tác giả 1, tên tác giả 2
[tab] [authors] vai trò 1: tên tác giả 1, vai trò 2: tên tác giả 2

<b>Ngày viết hoặc công bố</b> [date]
<b>Nguồn</b> (nếu bài viết được lấy từ nguồn khác): [source]
Sau tag nguồn có thể chỉ là tên cá nhân/tổ chức hoặc một đường link sử dụng tag &lt;a&gt;&lt;/a&gt (xem ở mục tiếp theo).

<b>Ảnh nền của bài viết:</b> [thumbnail] tên_file_ảnh (kèm đuôi, ví dụ như pic.png)
<i>File ảnh phải tồn tại trong thư mục images của folder bài viết. Nếu không có tag ảnh nền, chương trình mặc định lấy ảnh từ tag [img] (xem ở mục tiếp theo) để làm ảnh nền. Trong trường hợp không có ảnh nền lẫn ảnh trong bài viết, chương trình mặc định sử dụng ảnh sau:</i>

[img] no_thumbnail.png: Ảnh mặc định khi không có ảnh nền

<b>Các hashtags của bài viết:</b> [hashtags] hashtag1 hashtag2 hashtag3
<i>Lưu ý: các hashtags không có dấu "#" để tránh lỗi tìm kiếm, chương trình mặc định thêm "#" vào phía trước khi định dạng. Các hashtags cách nhau bằng khoảng trắng.

Các tags trên chỉ hiệu nghiệm khi được đặt ở đầu dòng. Các tags trên chỉ tồn tại duy nhất 1 phiên bản, nếu có 2 tags giống nhau, ví dụ như 2 tags [title], thì chương trình mặc định lấy nội dung của phiên bản tag cuối cùng.</i>

<b>Chỉ mục</b>: [HEADING] và [heading].
[tab][HEADING] là chỉ mục lớn, còn [heading] là chỉ mục nhỏ hơn.

<b>Ảnh</b>: [img] tên_file_ảnh (kèm đuôi) <i>hoặc</i> [img] tên_file_ảnh (kèm đuôi): mô tả ảnh
<i>File ảnh phải tồn tại trong thư mục images của folder bài viết; phải có khoảng trắng giữa tag [img] với nội dung.</i>

<b>Nội dung được căn giữa:</b> [center] Nội dung
<b>Nội dung được thụt vào 1 khoảng:</b> [tab] Nội dung

Các tags trên chỉ hiệu nghiệm khi được đặt ở đầu dòng.

<b>Tạo khoảng cách dòng:</b> &lt;br&gt;

[heading] TAGS ĐỊNH DẠNG
Các tags định dạng là các tag của HTML có cấu trúc: &lt;tên_tag&gt;Nội dung&lt;/tên_tag&gt;. Các tags định dạng có thể nằm ở giữa câu văn.

<b>In đậm:</b> &lt;b&gt;Nội dung&lt;/b&gt;
<b>In nghiên:</b> &lt;i&gt;Nội dung&lt;/i&gt;
Có thể kết hợp vừa in đậm, vừa in nghiên bằng cách &lt;b&gt;&lt;i&gt;Nội dung&lt;/i&gt&lt;/b&gt hoặc &lt;i&gt;&lt;b&gt;Nội dung&lt;/b&gt&lt;/i&gt.

<b>Đường link:</b> &lt;a href="đường link"&gt;<i>Nội dung hiển thị</i>&lt;/a&gt;
Chương trình sẽ hiển thị nội dung màu xanh biển, và khi người đọc nhấp vào phần nội dung, đường link sẽ được mở.


[HEADING] ĐĂNG BÀI VIẾT LÊN WEB
Để thêm bài viết vào web, mở file <b>journal_list.json</b>. Ở đây, các bài viết được thêm sau nên được viết ở đầu. 
Sau dấu "[", gõ cặp dấu ngoặc nhọn, và thêm dấu phẩy sau khi đóng dấu ngoặc nhọn. Bên trong dấu ngoặc nhọn, viết "path": "tên_folder_bài_viết" (lưu ý để trong dấu ngoặc kép). 
Nếu muốn ẩn bài viết, có thể xóa hoặc thêm "state": "private" (vẫn để trong dấu ngoặc kép). Nếu đã thêm "state", phải thêm dấu phẩy ở cuối dòng trước chứa "path".
[img] img1.png: Cấu trúc file journal_list.json

Trong Forum có 2 mục bài viết là Suggested Articles và Latest Articles. 
Các bài viết trong mục SUGGESTED sẽ được ghi ở trong file <b>suggest_list.json</b>. 
Các thêm bài viết tương tự như ở trong file <b>journal_list.json</b>. Mục Latest Articles sẽ chứa tất cả bài không bị ẩn.



