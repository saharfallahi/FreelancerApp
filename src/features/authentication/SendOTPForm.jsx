import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";

function SendOTpForm({ isSendingOtp,phoneNumber,onChange,onSubmit }) {
  



  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <TextField
          value={phoneNumber}
          onChange={onChange}
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

export default SendOTpForm;
