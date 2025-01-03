import { fetchCustomers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/create-form";
import { createInvoice } from "@/app/lib/actions";
export default async function CreateInvoicePage() {
  const customers = await fetchCustomers();

  return (
    <>
      <main>
        <Breadcrumbs
          breadcrumbs={[
            {
              label: "Invoices",
              href: "/dashboard/invoices",
            },
            {
              label: "Create Invoices",
              href: "/dashboard/invoices/create",
            },
          ]}
        ></Breadcrumbs>
        <Form  customers={customers}></Form>
      </main>
    </>
  );
}
