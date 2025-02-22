import {Flip, toast} from "react-toastify";

class Helper {
    static delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    static toastSuccess(message) {
        toast.success(message, {
            position: "bottom-right", // vị trí toast
            autoClose: 5000, // thời gian hiển thị
            hideProgressBar: false, //Xác định có hiển thị thanh tiến trình (progress bar) ở dưới toast hay không.
            closeOnClick: true, //Xác định nếu toast có thể bị đóng khi người dùng click vào nó hay không.
            pauseOnHover: true, //Xác định có tạm dừng (hoãn lại) việc đóng toast khi người dùng di chuột vào nó hay không.
            draggable: true, //Xác định nếu người dùng có thể kéo toast xung quanh màn hình hay không.
            progress: undefined, //Xác định tỷ lệ hoàn thành của thanh tiến trình.
            theme: "colored", //Xác định giao diện của toast.
            transition: Flip, //Xác định hiệu ứng chuyển tiếp khi toast xuất hiện và biến mất.
        });
    }
    static toastError(message) {
        toast.error(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
        });
    }
}

export default Helper;