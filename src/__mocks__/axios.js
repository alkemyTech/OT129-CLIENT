const mockAxios = jest.genMockFromModule("axios");

mockAxios.create = () => {
  return mockAxios;
};

export default mockAxios;
