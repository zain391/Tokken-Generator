import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
    const invoiceNum=0;

    return (
        <div>
            <table class="table-fixed border-separate border-spacing-2 border border-slate-400 ...">
                <thead>
                    <tr>
                        <th class="border border-slate-300 ...">
                            <button>
                            <Link to="/invoices"><h1 className='font-sans hover:font-serif text-4xl' >Invoices</h1></Link>
                            </button>
                            <p className='font-sans hover:font-serif '>{`there are ${0} invoices`}</p></th>
                        <th class="border border-slate-300 ..."><button>filter</button></th>
                        <th class="border border-slate-300 ..."><button>filter</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {
                                
                            }
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Home