import React from "react";
import styles from '../styles/table.module.scss'
import Image from 'next/image'
const Table = ({data}) => {
    const rand = Math.floor(Math.random() * 200)
  return (
    <section className="section-table">
        <div className="container mt-5">
            <div className="row">
                <div className="tables">
                <table className={styles.container}>
	<thead>

		<tr>
			<th><h1>Name</h1></th>
			<th><h1>Price</h1></th>
		</tr>
	</thead>
	<tbody>
        {
        data[0].error ? <h2 className="text-center">API ERROR</h2> :
        data.slice(rand,rand+5).map((d,index) => {
            return (
<tr key={index}>
			<td>
            <div className="d-flex">
            <Image
        src={d.url || 'https://bitcoin.org/img/icons/opengraph.png'}
        alt=""
        width={25}
        height={25}
      /> 
             {`${d.name} (${d.asset_id})`}
            </div>
            </td>
			<td className="font">{d.price_usd ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(d.price_usd) : 'Not Found'}</td>
		</tr>
            )
            
        })}
		
	</tbody>
</table>
                </div>
               
            </div>
        </div>
    </section>
  );
};

export const getStaticProps = async () => {

}

export default Table;
