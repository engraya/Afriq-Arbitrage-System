import { apiClient } from "../../api/axios";

export const getTransactionsData = async () => {
    try {
      const response = await apiClient.get(`/transaction/get-transactions`);
        return response?.data;
    } catch (error) {
      console.log(error);
    }
    return null;
  };
