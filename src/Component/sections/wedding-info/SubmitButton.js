import React from 'react';
import { Save } from 'lucide-react';

const SubmitButton = ({ loading, isSubmitting }) => {
    return (
        <div className="flex justify-center">
            <button
                type="submit"
                disabled={loading || isSubmitting}
                className={`inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-rose-500 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${
                    loading || isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
            >
                {loading || isSubmitting ? 'Đang lưu...' : 'Lưu thông tin'}
                <Save className="w-5 h-5 ml-2" />
            </button>
        </div>
    );
};

export default SubmitButton;