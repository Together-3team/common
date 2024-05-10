import InputSongeun from "./Input";

export default function FormSongeun() {
  return (
    <form>
      <InputSongeun
        label={"송은인풋"}
        hasLabel={true}
        type="password"
        id="songeun"
      />
      <button type="submit">제출</button>
    </form>
  );
}
