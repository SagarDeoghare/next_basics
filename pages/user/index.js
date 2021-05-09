import styles from "../../styles/Home.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      next_users: data,
    },
  };
};

const Index = ({ next_users }) => {
  console.log(next_users);
  return (
    <div>
      {next_users.map((user) => (
        <Link href={"/user/" + user.id} key={user.id}>
          <a className={styles.single}>{user.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default Index;
