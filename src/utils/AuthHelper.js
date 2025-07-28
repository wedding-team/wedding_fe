export const saveAuthData = (authData) => {
    localStorage.setItem("access-token", authData.token);
    localStorage.setItem("client", authData.client);
    localStorage.setItem("expiry", authData.expiry);
    localStorage.setItem("uid", authData.uid);
    localStorage.setItem("admin", JSON.stringify(authData.admin));
};

export const clearAuthData = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("client");
    localStorage.removeItem("expiry");
    localStorage.removeItem("uid");
    localStorage.removeItem("admin");
};
