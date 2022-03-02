import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { putOrganization } from "../features/Organization/organizationSlice";
import EditForm from "../Components/EditForm/EditForm";


const mockdecideAction = jest.fn();
const mockAxios = require("axios").default;

const organization = {
  name: "Somos más",
  logo: "https://i.ibb.co/vLh7pYM/LOGO-SOMOS-MAS.png",
  short_description:
    "Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social.",
  long_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tincidunt ligula. Nam imperdiet odio id purus pellentesque ullamcorper. In turpis diam, pharetra sed mattis eu, dapibus nec odio. Sed vel nibh ut ex vulputate dictum et id ligula. Ut eu quam lobortis, efficitur metus id, porta mauris. Nullam mollis odio finibus, laoreet ligula eu, porttitor urna. Duis tincidunt neque in elit ornare, eu dignissim odio tempor. Praesent elementum eros nec fringilla varius. Curabitur suscipit, libero non aliquet tempus, nibh ex tempor risus, ut sodales massa dui non tortor. Nunc fermentum, urna id sollicitudin iaculis, erat massa maximus ipsum, at convallis dui turpis vel ligula. Morbi tincidunt leo eu mattis semper.",
  id: 16,
};

test("Should display an error message if an input is empty when submit", async () => {

  const handleSubmit = jest.fn();

  render(<EditForm onSubmit={handleSubmit} />);
  userEvent.click(screen.getByTestId("btnSubmit"));

  await waitFor(() => {
    expect(screen.getByText("El nombre es requerido")).toBeInTheDocument();
    expect(screen.getByText("Por favor ingrese una imagen")).toBeInTheDocument();
    expect(screen.getByText("La descripcion corta es requerida")).toBeInTheDocument();
    expect(screen.getByText("La descripcion larga es requerida")).toBeInTheDocument();
  });
});

test("Shouldn't make a put request if form is not validated", async () => {

  render(<EditForm decideAction={mockdecideAction} />);
  userEvent.click(screen.getByTestId("btnSubmit"));

  await waitFor(() => {
    expect(mockdecideAction).not.toBeCalled();
  });
});

test("Should make a put request if form is validated and show a succes message", async () => {
    render(<EditForm organization={organization} decideAction={mockdecideAction} />);
    await putOrganization(organization, organization.id);

    mockAxios.put = jest.fn().mockResolvedValue({
      data: {
        success: true,
      },
    });

    waitFor(async () => {
      const inputName = await screen.findByTestId("name");
      const inputImage = await screen.findByTestId("logo");
      const inputShortDescription = await screen.findByTestId("short_description");
      const inputLongDescription = await screen.findByTestId("long_description");

      userEvent.type(inputName, organization.name);
      userEvent.type(inputImage, organization.logo);
      userEvent.type(inputShortDescription, organization.short_description);
      userEvent.type(inputLongDescription, organization.long_description);
      userEvent.click(screen.getByTestId("btnSubmit"));
      expect(mockdecideAction).toBeCalled();
      expect(mockAxios.put).toBeCalledWith(`organization/${organization.id}`, organization);
      expect(screen.findByText(/La organizacion id: 16 se editó correctamente/i)).toBeInTheDocument();
    });
  });

  test("Should make a put request if form is validated and show a error message", async () => {
    render(<EditForm organization={organization} decideAction={mockdecideAction} />);
    await putOrganization(organization, organization.id);

    mockAxios.put = jest.fn().mockResolvedValue({
      data: {
        success: false,
      },
    });

    waitFor(async () => {
      const inputName = await screen.findByTestId("name");
      const inputImage = await screen.findByTestId("logo");
      const inputShortDescription = await screen.findByTestId("short_description");
      const inputLongDescription = await screen.findByTestId("long_description");

      userEvent.type(inputName, organization.name);
      userEvent.type(inputImage, organization.logo);
      userEvent.type(inputShortDescription, organization.short_description);
      userEvent.type(inputLongDescription, organization.long_description);
      userEvent.click(screen.getByTestId("btnSubmit"));
      expect(mockdecideAction).toBeCalled();
      expect(mockAxios.put).toBeCalledWith(`organization/${organization.id}`, organization);
      expect(screen.findByText(/Ocurrió un error al editar la organización id: 16/i)).toBeInTheDocument();
    });
  });


    // render(<EditForm decideAction={mockdecideAction} />);
    // userEvent.type(screen.getByTestId("name"),"roberto");
    // userEvent.type(screen.getByTestId("logo"),"logo");
    // userEvent.type(screen.getByLabelText("Descripción corta:"),"testingShoty");
    // userEvent.type(screen.getByTestId("long_description"),"testingLong");

    // userEvent.click(screen.getByTestId("btnSubmit"));
  
    // waitFor(() => {
    //     expect(mockdecideAction).toBeCalled();
    //     expect(mockAxios.put).toBeCalledWith("organization", organization);
    // });
//   });