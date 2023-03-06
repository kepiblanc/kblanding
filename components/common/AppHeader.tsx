import React, { FC } from "react";
import Head from "next/head";

interface Props {
  pageTitle: string;
}

const AppHeader: FC<Props> = ({ pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
    </>
  );
};

export default AppHeader;
