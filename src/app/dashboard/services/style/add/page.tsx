import AddForm from "@/components/forms/ServiceForms/AddForm/AddForm";

import GreyLayout from "@/views/GreyLayout";
export default function page() {
  return (
    <GreyLayout>
      <div className=" mx-auto max-w-7xl">
        <h1 className="text-xxl text-center mb-10">Додати послугу</h1>
        <div>
          <AddForm defaultFormat="online" hasFormat category="style" />
        </div>
      </div>
    </GreyLayout>
  );
}
