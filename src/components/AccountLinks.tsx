import Link from "next/link";
import { Icon } from "./Icon";

export function AccountLinks() {
  return (
    <div className="account">
      <Link href="/progress"><Icon name="progress" size={17} />My progress</Link>
    </div>
  );
}
