import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

type dataType = {
  name: string;
  company: string;
  title: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required('First Name cannot be empty')
    .matches(/^[A-Za-z]+$/, 'Enter a valid name'),
  company: yup
    .string()
    .required('Company Name cannot be empty')
    .matches(/^[A-Za-z]+$/, 'Enter a valid Company name'),
  title: yup
    .string()
    .required('Title cannot be empty')
    .matches(/^[A-Za-z]+$/, 'Enter a valid Company name'),
  email: yup
    .string()
    .required('Looks like this is not an email')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Enter a valid Email'),
  message: yup
    .string()
    .required('Message cannot be empty')
    .matches(/^[A-Za-z]+$/, 'Enter a valid Company name'),
});

export default function Formsbmt() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sbmt = (data: dataType) => {
    console.log(data);
  };

  return (
    <form className="w-[90%]" onSubmit={handleSubmit(sbmt)}>
      <input
        type="text"
        placeholder="Name"
        className="border-b-[1px] border-b-[#36536B] border-opacity-50 placeholder:text[#36536B] outline-none w-full bg-transparent pl-4 py-4"
        {...register('name')}
      />
      <input
        type="text"
        placeholder="Email Address"
        className="border-b-[1px] border-b-[#36536B] border-opacity-50 placeholder:text[#36536B] outline-none w-full bg-transparent pl-4 py-4"
        {...register('email')}
      />
      <input
        type="text"
        placeholder="Company Name"
        className="border-b-[1px] border-b-[#36536B] border-opacity-50 placeholder:text[#36536B] outline-none w-full bg-transparent pl-4 py-4"
        {...register('company')}
      />
      <input
        type="text"
        placeholder="Title"
        className="border-b-[1px] border-b-[#36536B] border-opacity-50 placeholder:text[#36536B] outline-none w-full bg-transparent pl-4 py-4"
        {...register('title')}
      />
      <input
        type="text"
        placeholder="Message"
        className="border-b-[1px] border-b-[#36536B] border-opacity-50 placeholder:text[#36536B] outline-none w-full bg-transparent pl-4 pb-10 h-[120px]"
        {...register('message')}
      />
      <div className="w-full flex items-center justify-between text-sm mt-4">
        <input type="checkbox" name="" id="" className="custom-check cursor-pointer" />
        <p className="text-[#36536B] leading-[25px] opacity-70 w-[87%]">
          Stay up-to-date with company announcements and updates to our API
        </p>
      </div>
      <button
        type="submit"
        className="rounded-[24px] border-[1px] border-[#36536B] grid place-items-center cursor-pointer mt-5 w-[150px] h-[48px]"
      >
        <p className="font-bold text-[#36536B]">Submit</p>
      </button>
    </form>
  );
}
