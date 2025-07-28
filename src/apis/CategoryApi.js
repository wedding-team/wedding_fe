import apiClient from "./apiClient";

class CategoryApi {
    static getAllCategories() {
        return apiClient.get('api/v1/admin/categories')
    }
}

export default CategoryApi;