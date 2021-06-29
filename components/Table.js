import React from "react";
import styles from '../styles/table.module.scss'
import Image from 'next/image'
const Table = ({data}) => {
  return (
    <section className="section-table">
        <div className="container mt-5">
            <div className="row">
                <div className="tables">
                <table className={styles.container}>
	<thead>

		<tr>
			<th><h1>ชื่อ</h1></th>
			<th><h1>ราคาล่าสุด</h1></th>
			<th><h1>Clicks</h1></th>
		</tr>
	</thead>
	<tbody>
        {
            
        data.slice(0,10).map((d) => {
            return (
<tr key={d.asset_id}>
			<td>
            <div className="d-flex">
            <Image
        src={d.url}
        alt=""
        width={25}
        height={25}
      /> 
             {d.asset_id}
            </div>
            </td>
			<td>9518</td>
			<td>6369</td>
		</tr>
            )
            
        })}
		
        
	</tbody>
</table>
                    {/* {/* <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">ชื่อ</th>
                            <th scope="col">Last Price</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                            
                           {/*  {
                                 exchanges.exchanges.map((data) =>{
                                     let i = 0;
                                     return (
                                        <tr key={data.exchange_id}>
                                    <th scope="row">{i++}</th>
                                    <td>{data.exchange_id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.website}</td>
                                </tr>
                                     )
                                
                                })
                            } */}
                        
                        {/* </tbody>
                    </table>  */}
                </div>
               
            </div>
        </div>
    </section>
  );
};

export const getStaticProps = async () => {

}

export default Table;
