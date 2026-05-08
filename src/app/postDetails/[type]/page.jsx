/* eslint-disable @next/next/no-img-element */

import axios from "axios";
import Header from "../../components/header";
import { API_PATHS, BASE_ASSET_URL } from "../../utils";
import PostDetails from '@/app/components/PostDetails'



const PostData = async () => {
    const response = await axios.get(API_PATHS.GET_Posts);
    const data = response.data;
    // console.log(data);
    return data;
};

const getPostById = async(id) => {
    const response = await axios.get(`${API_PATHS.GET_Posts_By_Id}/${id}`)
    return response.data
}



const page = async ({params}) => {
  console.log("params===>",params)
  const data = await PostData()
  const dataById = await getPostById(params.type)

  return (
    <>
      {/* Hello world */}
      <Header />
      <div>
        <div className="top_banner margin_adjust2">
          <div className="top_banner_pic">
            <img
              src="../images/wdd/2019/5.JPG"
              className="img-responsive center-block"
              alt=""
            />
            {/* <img
              src="../images/wdd/1.JPG"
              className="img-responsive center-block mob_pic1"
              alt=""
            /> */}
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="fos_outer">
                    <div className="fos_text">
                      <div className="fos_padding">
                        <h1>
                          <span>{dataById.heading}</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
       <PostDetails data={dataById}/>
      </div>
      </div>
    </>
  );
};

export default page;
