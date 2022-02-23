const mockAxios = jest.genMockFromModule("axios");

mockAxios.post = jest.fn();
mockAxios.put = jest.fn();

mockAxios.interceptors = mockAxios.interceptors || {};
mockAxios.interceptors.response = mockAxios.interceptors.response || {};
mockAxios.interceptors.response.use = jest.fn();

mockAxios.create = () => {
  return mockAxios;
};

export default mockAxios;
