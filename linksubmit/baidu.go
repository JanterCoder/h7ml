package linksubmit

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
)

const (
	baiduURL = "http://data.zz.baidu.com/urls?site=https://www.h7ml.cn&token=unmWrGQ9puPdyCug"
)

func Baidu() {
	filePath := "urls.txt"
	linesPerFile := 100

	lines, err := readLines(filePath)
	if err != nil {
		fmt.Println("Failed to read the file:", err)
		return
	}

	fileCount := len(lines) / linesPerFile
	if len(lines)%linesPerFile > 0 {
		fileCount++
	}

	for i := 0; i < fileCount; i++ {
		start := i * linesPerFile
		end := start + linesPerFile
		if end > len(lines) {
			end = len(lines)
		}

		fileName := fmt.Sprintf("urls_%d.txt", i+1)
		err := writeLines(fileName, lines[start:end])
		if err != nil {
			fmt.Printf("Failed to write file %s: %v\n", fileName, err)
			continue
		}

		err = submitFile(fileName)
		if err != nil {
			fmt.Printf("Failed to submit file %s: %v\n", fileName, err)
			continue
		}

		fmt.Printf("Submitted file %s (%d/%d)\n", fileName, i+1, fileCount)
	}
}

func readLines(filePath string) ([]string, error) {
	file, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	var lines []string
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}

	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return lines, nil
}

func writeLines(fileName string, lines []string) error {
	file, err := os.Create(fileName)
	if err != nil {
		return err
	}
	defer file.Close()

	writer := bufio.NewWriter(file)
	for _, line := range lines {
		fmt.Fprintln(writer, line)
	}

	return writer.Flush()
}

func submitFile(fileName string) error {
	filePath := fmt.Sprintf("./%s", fileName)
	payload := strings.NewReader("@" + filePath)

	client := http.DefaultClient
	req, err := http.NewRequest(http.MethodPost, baiduURL, payload)
	if err != nil {
		return err
	}
	req.Header.Set("Content-Type", "text/plain")

	res, err := client.Do(req)
	if err != nil {
		return err
	}
	defer res.Body.Close()

	_, err = ioutil.ReadAll(res.Body)
	if err != nil {
		return err
	}

	return nil
}
