import 'dart:convert';

class User {
  final String? id;
  final String? name;
  final String? password;
  final String? email;
  final String? address;
  final String? type;
  final String? token;

  User(
      {this.id,
      this.name,
      this.password,
      this.email,
      this.address,
      this.type,
      this.token});

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'password': password,
      'address': address,
      'type': type,
      'token': token,
    };
  }

  factory User.fromMap(Map<String, dynamic> map) {
    return User(
      id: map['_id'] ?? "",
      name: map['name'] ?? "",
      password: map['password'] ?? "",
      address: map['address'] ?? "",
      type: map['type'] ?? "",
      email: map['email'] ?? "",
      token: map['token'] ?? "",
    );
  }

  String toJson() => json.encode(toMap());

  factory User.fromJson(String source) => User.fromMap(json.decode(source));

  User copyWith({
    String? id,
    String? name,
    String? email,
    String? password,
    String? address,
    String? type,
    String? token,
  }) {
    return User(
      id: id ?? this.id,
      name: name ?? this.name,
      email: email ?? this.email,
      password: password ?? this.password,
      address: address ?? this.address,
      type: type ?? this.type,
      token: token ?? this.token,
    );
  }
}
