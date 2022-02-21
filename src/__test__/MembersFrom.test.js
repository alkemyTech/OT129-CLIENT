import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MembersForm from "../Components/Members/MembersForm";

describe("validaciones del formulario", () => {


    it("mostrar los mensajes de error si los campos del formulario estan vacios", async () => {
        const handleSubmit = jest.fn();

        render(<MembersForm onSubmit={handleSubmit} />)

        userEvent.click(screen.getByRole('button', {
            name: /crear/i
        }))

        await waitFor(() => {
            expect(screen.getByText("El nombre es obligatorio")).toBeInTheDocument();
            expect(screen.getByText("La imagen es obligatoria")).toBeInTheDocument();
            expect(screen.getByText("La descripción es obligatorio")).toBeInTheDocument();
            expect(screen.getByText("La url de Facebook es obligatorio")).toBeInTheDocument();
            expect(screen.getByText("La url de LinkedIn es obligatorio")).toBeInTheDocument();
        })
    })

    it("prevenir submit en caso que el formulario no este completado", async () => {
        const handleClick = jest.fn();

        render(<MembersForm onSubmit={handleClick} />)

        userEvent.click(screen.getByRole('button', {
            name: /crear/i
        }))

        await waitFor(() => {
            expect(handleClick).not.toHaveBeenCalled();
        })
    })

      it('rendering and submitting a basic Formik form', async () => {
        const handleForm = jest.fn()
        render(<MembersForm onSubmit={handleForm} />)
      
        userEvent.type(screen.getByLabelText(/name/i))
        userEvent.type(screen.getByLabelText(/linkedinUrl/i))
        userEvent.type(screen.getByLabelText(/facebookUrl/i))
      
        userEvent.click(screen.getByRole('button', {
            name: /crear/i
        }))
      
        await waitFor(() =>
          expect(handleForm).toHaveBeenCalledWith({
            name: 'Prueba',
            facebookUrl: 'John',
            linkedinUrl: 'Dee',
          }),
        )
    })

})