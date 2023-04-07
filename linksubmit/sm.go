package linksubmit

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

func Sm() {

	url := "https://data.zhanzhang.sm.cn/push?site=www.h7ml.cn&user_name=h7ml@qq.com&resource_name=mip_add&token=TI_0ae5b44754ac743f70cbd9f7482b11b5"
	method := "POST"

	payload := strings.NewReader(`@urls.txt`)

	client := &http.Client{}
	req, err := http.NewRequest(method, url, payload)

	if err != nil {
		fmt.Println(err)
		return
	}

	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer res.Body.Close()

	bodyBytes, err := ioutil.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}
	var bodyMap map[string]interface{}
	if err := json.Unmarshal(bodyBytes, &bodyMap); err != nil {
		panic(err)
	}
	fmt.Println(bodyMap["returnCode"])
}
