import { toast } from "sonner";

class Helper {
    static delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    static toastSuccess(message) {
        toast.success(message, {
            style: {
                background: "white",
                color: "#007bff",
                border: "none",
                fontWeight: "bold",
            },
        });
    }

    static toastError(message) {
        toast.error(message, {
            style: {
                background: "white",
                color: "#dc3545",
                border: "none",
                fontWeight: "bold",
            },
        });
    }

    static handleApiError(error) {
        if (error.response && error.response.data) {
            const errors = error.response.data;

            const translations = {
                "Email has already been taken": "Email đã được sử dụng",
                "can't be blank": "không được để trống",
                "is invalid": "không hợp lệ"
            };

            const errorMessages = Object.keys(errors)
                .map((field) => {
                    const uniqueErrors = [...new Set(errors[field])]; 
                    const translatedErrors = uniqueErrors.map(
                        (msg) => translations[msg] || msg 
                    );
                    return translatedErrors.join(", ");
                })
                .join("\n");

            this.toastError(errorMessages);
        } else {
            this.toastError("Không thể kết nối đến máy chủ, vui lòng thử lại!");
        }
    }
}

export default Helper;
