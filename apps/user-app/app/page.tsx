import { PrismaClient } from "@repo/db/client";
const client =new PrismaClient();
export default function Page(): JSX.Element {
  return (
    <div className="">
      hi there
    </div>
  );
}
