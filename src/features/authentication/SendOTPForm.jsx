import Loader from "../../ui/Loader";
import RHFTextField from "../../ui/RHFTextField";

function SendOTPForm({ register,isSendingOtp,onSubmit }) {
  



  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <RHFTextField
        register={register}
          name="phoneNumber"
          label="شماره موبایل"
        />
        <div>
          {isSendingOtp ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
