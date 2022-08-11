import {DefaultPageProps, BoardList, BOARD_LIST} from '~/comp';
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

    const onClickBoard = (e: React.MouseEvent, boardId: string): void => {
        // e.stopPropagation();
        alert(`Hello ${boardId}`)
    }

  return (
    <div>
      <h1>list pages</h1>
      <BoardList onClickBoard={onClickBoard}/>
    </div>
  );
}
