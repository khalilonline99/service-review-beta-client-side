import React from 'react';
import { Helmet } from 'react-helmet';

const Blogs = () => {
    return (
        <div className='my-10'>
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            <div className='my-5'>
                <h1 className='font-bold text-2xl my-5'>Difference between SQL and NoSQL</h1>
                <div className="overflow-x-auto mx-auto">
                    <table className="table w-2/5 mx-auto">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            <tr>
                                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                <td>Non-relational or distributed database system.
                                </td>
                            </tr>
                            {/* <!-- row 2 --> */}
                            <tr>

                                <td>These databases are best suited for complex queries</td>
                                <td>These databases are not so good for complex queries
                                </td>
                            </tr>
                            {/* <!-- row 3 --> */}
                            <tr>

                                <td>Vertically Scalable	</td>
                                <td>Horizontally scalable
                                </td>
                            </tr>
                            {/* <!-- row 4 --> */}
                            <tr>

                                <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc</td>
                                <td>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc</td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>

            {/* Q2 */}
            <div className='my-5 w-3/5 mx-auto my-3 bg-blue-200 p-5 rounded-xl'>
                <h1 className='font-bold text-2xl my-5'>What is JWT, and how does it work?</h1>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p>
            </div>

            {/* Q3 */}
            <div className='my-5 w-3/5 mx-auto my-3 p-5 rounded-xl'>
                <h1 className='font-bold text-2xl my-5'>What is the difference between javascript and NodeJS?</h1>
                <p> <span className='font-bold'>Javascript</span> is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                <p> <span className='font-bold'>NodeJS</span>  is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.  </p>
            </div>


            {/* q4 */}
            <div className='my-5 w-3/5 mx-auto my-3 bg-blue-200 p-5 rounded-xl'>
                <h1 className='font-bold text-2xl my-5'>How does NodeJS handle multiple requests at the same time?</h1>
                <p>JavaScript is single threaded. The Node runtime is not. By default, Node only executes one JavaScript instance unless instructed to use more. Node's main JavaScript thread uses an event loop. When multiple requests are made, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they're all processed. The loop executes very quickly  <br />
                    Node introduced worker threads in Node 13. These run on a separate JavaScript thread. In larger scale Node applications, developers tend to create one worker per CPU to maximize parallel processing capacity.</p>
            </div>

        </div>
    );
};

export default Blogs;