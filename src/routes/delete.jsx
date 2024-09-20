import { Form, redirect, useLoaderData } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
    await deleteContact(params.contactId);
    return redirect("/");
}

export default function DeleteContact() {

}