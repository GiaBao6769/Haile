[title] Hướng dẫn cách đăng và quản lí bài trên web
[desc] Đây là bài viết về các công đoạn chính để đăng và quản lí bài.
[authors] Hoàng Gia Bảo
[date] 04/02/2026

[heading][1] TẠO BÀI VIẾT
Đầu tiên, vào folder journals và tạo folder bài viết. Trong folder, tạo 1 file journal.md và 1 folder images. File markdown (.md) sẽ là nơi ta viết bài, còn folder images sẽ là nơi ta lưu trữ ảnh sử dụng trong bài viết.

[heading][1] CÁC TAG TRONG BÀI VIẾT
Tags là câu lệnh chung để chương trình hiểu và chuyển hóa nội dung thành bài viết trên web. Một tag đầy đủ sẽ có cấu trúc "[tên tag] Nội dung".
Lưu ý: nếu có khoảng trắng giữa tag và nội dung, chương trình sẽ mặc định xóa bỏ [bold][1] khoảng trắng. Nghĩa là nếu bạn muốn có 1 khoảng trắng ở đầu dòng, hãy gõ 2 khoảng trắng.

Nhan đề: [title]
Mô tả: [desc] hoặc [description]
Tác giả: [authors]
[\\][authors] tác giả 
[\\][authors] chức danh: tác giả
Một bài viết có thể có nhiều tác giả, nên bạn có thể thêm nhiều  người và cụ thể hóa chức danh của từng người bằng cấu trúc sau:
[\\][authors] chức danh 1: tác giả 1, chức danh 2: tác giả 2
Ngày viết hoặc công bố: [date]
Nguồn (nếu bài viết được lấy từ nguồn khác): [source]
Sau tag nguồn có thể chỉ là tên hoặc đường link sử dụng tag [//][link][] (xem ở mục tiếp theo).

Ảnh nền của bài viết: [thumbnail] tên_file_ảnh (kèm đuôi, ví dụ như pic.png)
File ảnh phải tồn tại trong thư mục images của folder bài viết. Nếu không có tag ảnh nền, chương trình mặc định lấy ảnh từ tag [//][img] (xem ở mục tiếp theo) để làm ảnh nền. Trong trường hợp không có ảnh nền lẫn ảnh trong bài viết, chương trình mặc định sử dụng ảnh sau:

[img] no_thumbnail.png: Ảnh mặc định khi không có ảnh nền

Các hashtags của bài viết: [\\][hashtags] hashtag1 hashtag2 hashtag3
Lưu ý: các hashtags không có dấu "#" để tránh lỗi tìm kiếm, chương trình mặc định thêm "#" vào phía trước khi định dạng. Các hashtags cách nhau bằng khoảng trắng.

Các tags trên chỉ hiệu nghiệm khi được đặt ở đầu dòng. Các tags trên chỉ tồn tại duy nhất 1 phiên bản, nếu có 2 tags giống nhau, ví dụ như 2 tags [\\][title], thì chương trình mặc định lấy nội dung của phiên bản tag cuối cùng.

Để tạo chỉ mục: [heading][số]. Ví dụ: [heading][1], [heading][2], [heading][3].
[\\] Heading-1 là chỉ mục đầu tiên, nếu một chỉ mục được lồng bên trong, chỉ cần tăng giá trị lên 1 đơn vị. Số càng lớn thì nội dung càng thụt vào sâu.

Để thêm ảnh: [img] tên_file_ảnh (kèm đuôi): mô tả ảnh
File ảnh phải tồn tại trong thư mục images của folder bài viết. 
Để tạo nội dung được căn giữa: [center] nội dung

Các tags trên chỉ hiệu nghiệm khi được đặt ở đầu dòng.

[heading-2] TAGS ĐỊNH DẠNG
Các tags định dạng có cấu trúc: [tên tag][nội dung định dạng].
Các tags định dạng có thể nằm ở giữa câu văn.

Thêm đường link: [link][nội dung, đường_link]
Chương trình sẽ hiển thị nội dung màu xanh biển, và khi người đọc nhấp vào phần nội dung, đường link sẽ được mở.
In đậm: [b][nội dung]
In nghiên: [i][nội dung]

Có thể kết hợp vừa in đậm, vừa in nghiên bằng cách [//][b][[i][nội dung]] hoặc [//][i][[b][nội dung]].

[heading][1] ĐĂNG BÀI VIẾT LÊN WEB
Để thêm bài viết vào web, mở file [b][journal_list.json]. Ở đây, các bài viết được thêm sau nên được viết ở đầu. Sau dấu "[", gõ cặp dấu ngoặc nhọn, và thêm dấu phẩy sau khi đóng dấu ngoặc nhọn. Bên trong dấu ngoặc nhọn, viết "path": "tên_folder_bài_viết" (lưu ý để trong dấu ngoặc kép). Nếu muốn ẩn bài viết, có thể xóa hoặc thêm "state": "private" (vẫn để trong dấu ngoặc kép). Nếu đã thêm "state", phải thêm dấu phẩy ở cuối dòng trước chứa "path".
[img] img1.png: Cấu trúc file journal_list.json

Trong Forum có 2 mục bài viết là Suggested Articles và Latest Articles. Các bài viết trong mục SUGGESTED sẽ được ghi ở trong file [b][suggest_list.json]. Các thêm bài viết tương tự như ở trong file [b][journal_list.json]. Mục Latest Articles sẽ chứa tất cả bài không bị ẩn.


