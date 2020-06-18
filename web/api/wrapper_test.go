package main

import (
	"reflect"
	"testing"
)

// WrapperCommand represents components necessary for OAuth2l request
type WrapperCommand struct {
	RequestType string
	Args
}

// Args type used for unmarshalled JSON
type Args map[string]interface{}

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
