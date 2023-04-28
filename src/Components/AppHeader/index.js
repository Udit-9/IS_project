import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";

function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(  [{
        "id": 1,
        "body": "Cleaning Required in Toilet-1 of NR block",
        "postId": 100,
        "user": {
            "id": 63,
            "username": "eburras1q"
        }
    },
    {
        "id": 2,
        "body": "NH3 concentration crosses the limit, cleaning required in Toilet-2 NR",
        "postId": 27,
        "user": {
            "id": 71,
            "username": "omarsland1y"
        }
    },]);
    });
    getOrders().then((res) => {
      setOrders(  [{
        "id": 1,
        "products":[ {"id":59,"title":"Spring and summershoes","price":20,"quantity":3,"total":60,"discountPercentage":8.71,"discountedPrice":55},{"id":88,"title":"TC Reusable Silicone Magic Washing Gloves","price":29,"quantity":2,"total":58,"discountPercentage":3.19,"discountedPrice":56},],
    },
  //   {
  //     "id": 2,
  //     "products": {
  //       "id": 64,
  //       "title":"dbbddfv dv","price":20,"quantity":3,"total":60,"discountPercentage":8.71,"discountedPrice":55

  //   },
  // },
   ]);
    });
  }, []);

  return (
    <div className="AppHeader"  >
        
      <Image
        width={40}  
        // src=""
      ></Image>
      <Typography.Title>Hazardous Gas Data Analysis</Typography.Title>

      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Messages"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Alerts"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}
export default AppHeader;
