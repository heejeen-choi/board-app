import {DefaultPageProps, BoardList, BOARD_LIST, BoardDetail} from '~/comp';
import {useEffect} from "react";


export async function getStaticProps() {
  const pageProps: DefaultPageProps = {
    withoutAuth: true,
  };

  return {
    props: {
      ...pageProps,
    },
  };
}

export default function MainPage() {

    useEffect(() => {
        console.log('[LOGER] use effect....')
        console.log('[LOGER]', BOARD_LIST)
    })


  return (
    <div>
      <h1>detail pages</h1>
        <BoardDetail boardId={'5'}/>
    </div>
  );
}
