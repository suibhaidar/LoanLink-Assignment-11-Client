import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";

const LoanApplication = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  // 🔹 Fetch loan info
  const { data: loan = {}, isLoading } = useQuery({
    queryKey: ["application-form", id],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/application-form/${id}`
      );
      return res.data;
    },
  });
        const {loan_title,interest_rate,image} = loan
  console.log(user)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  if (isLoading) return <LoadingSpinner />;

  const onSubmit = async (formData) => {
    const loanApplication = {
      userEmail: user?.email,
      loanId: id,
      loanTitle: loan.loan_title,
      image:loan.image,
      category:loan.category,
      interestRate: loan.interestRate,
      Interest:loan.interest_rate,
      firstName: formData.firstName,
      lastName: formData.lastName,
      contactNumber: formData.contactNumber,
      nidOrPassport: formData.nidOrPassport,
      incomeSource: formData.incomeSource,
      monthlyIncome: Number(formData.monthlyIncome),
      loanAmount: Number(formData.loanAmount),
      reasonForLoan: formData.reasonForLoan,
      address: formData.address,
      extraNotes: formData.extraNotes,

      status: "Pending",
      applicationFeeStatus: "unpaid",
      appliedAt: new Date()
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/loan-applications`,
        loanApplication
      );

      if (res.data.insertedId) {
        toast.success("Loan application submitted successfully!");
        reset();
        navigate("/dashboard/my-loans");
      }
    } catch (error) {
      toast.error("Failed to submit application");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Loan Application Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Auto Filled Fields */}
        <input
          value={user?.email}
          readOnly
          className="input input-bordered w-full bg-gray-100"
        />

        <input
          value={loan_title}
          readOnly
          className="input input-bordered w-full bg-gray-100"
        />

        <input
          value={`${interest_rate}%`}
          readOnly
          className="input input-bordered w-full bg-gray-100"
        />

        {/* User Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input {...register("firstName", { required: true })} placeholder="First Name" className="input input-bordered w-full" />
          <input {...register("lastName", { required: true })} placeholder="Last Name" className="input input-bordered w-full" />
        </div>

        <input {...register("contactNumber", { required: true })} placeholder="Contact Number" className="input input-bordered w-full" />
        <input {...register("nidOrPassport", { required: true })} placeholder="National ID / Passport Number" className="input input-bordered w-full" />
        <input {...register("incomeSource", { required: true })} placeholder="Income Source" className="input input-bordered w-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="number" {...register("monthlyIncome", { required: true })} placeholder="Monthly Income" className="input input-bordered w-full" />
          <input type="number" {...register("loanAmount", { required: true })} placeholder="Loan Amount" className="input input-bordered w-full" />
        </div>

        <textarea {...register("reasonForLoan", { required: true })} placeholder="Reason for Loan" className="textarea textarea-bordered w-full" />
        <textarea {...register("address", { required: true })} placeholder="Address" className="textarea textarea-bordered w-full" />
        <textarea {...register("extraNotes")} placeholder="Extra Notes (Optional)" className="textarea textarea-bordered w-full" />

        <button className="btn btn-primary w-full">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default LoanApplication;
