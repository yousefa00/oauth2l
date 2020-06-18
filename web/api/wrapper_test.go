package main

import (
	"reflect"
	"testing"
	"encoding/json"
)


func TestWrapperCommandStructSingleArg(t *testing.T) {
	const expectedRequest = "test"
	var expectedArgs = Args{"flag": "value"}

	wrapper := WrapperCommand{
		expectedRequest,
		expectedArgs,
	}

	if wrapper.RequestType != expectedRequest {
		t.Errorf("expected request value incorrect")
	}

	if !reflect.DeepEqual(wrapper.Args, expectedArgs) {
		t.Errorf("expected args are not correct")
	}
}

func TestWrapperCommandStructManyArgs(t *testing.T) {
	const expectedRequest = "test"
	var expectedArgs = Args{"flag": []string{"value1", "value2"}}

	wrapper := WrapperCommand{
		expectedRequest,
		expectedArgs,
	}

	if wrapper.RequestType != expectedRequest {
		t.Errorf("expected request value incorrect")
	}

	if !reflect.DeepEqual(wrapper.Args, expectedArgs) {
		t.Errorf("expected args are not correct")
	}
}

func TestInvalidTypeInArgs(t *testing.T) {
	const expectedRequest = "test"
	var expectedArgs = Args{"flag": []int{2, 3}}

	wrapper := WrapperCommand{
		expectedRequest,
		expectedArgs,
	}

	_, err := wrapper.Execute()

	if err.Error() != "invalid type found in args" {
		t.Errorf("invalid types not detected")
	}
}

func TestValidTypeInArgs(t *testing.T) {
	const expectedRequest = "test"
	var expectedArgs = Args{"flag": []string{"test"}}

	wrapper := WrapperCommand{
		expectedRequest,
		expectedArgs,
	}

	_, err := wrapper.Execute()

	if err != nil {
		t.Errorf("valid types not detected")
	}
}

func TestJSONValidTypeInArgs(t *testing.T) {
	wrapper := WrapperCommand{}

	jsonString := []byte(`{
        "requesttype": "fetch",
        "args": {
            "--scope": ["cloud-platform","userinfo.email"]
		},
		"body": {}
	}`)
	
	json.Unmarshal(jsonString, &wrapper)

	_, err := wrapper.Execute()

	if err != nil {
		t.Errorf("valid types not detected")
	}
}
