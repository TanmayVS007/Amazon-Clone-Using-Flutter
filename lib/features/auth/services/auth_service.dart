// ignore_for_file: use_build_context_synchronously

import 'package:amazon_clone_application/constants/error_handling.dart';
import 'package:amazon_clone_application/constants/global_variables.dart';
import 'package:amazon_clone_application/constants/utils.dart';
import 'package:amazon_clone_application/models/user.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class AuthService {
  // sign up user
  void signUpUser({
    required BuildContext context,
    required String email,
    required String password,
    required String name,
  }) async {
    try {
      User user = User(
        id: "",
        name: name,
        password: password,
        email: email,
        address: '',
        type: '',
        token: '',
      );
      http.Response res = await http.post(Uri.parse("$uri/api/signUp"),
          body: user.toJson(),
          headers: <String, String>{
            'Content-Type': 'application/json; charset=UTF-8'
          });
      if (kDebugMode) {
        print(res);
      }
      httpErrorHandle(
          response: res,
          context: context,
          onSuccess: () {
            showSnackBar(
              context,
              "Account Created! Login with the same credentials",
            );
          });
    } catch (e) {
      showSnackBar(context, e.toString());
    }
  }
}
