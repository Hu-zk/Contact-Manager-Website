<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function display()
    {
        $contacts = Contact::all();
        return response()->json([
            'status' => 'success',
            'data' => $contacts,
        ]);
    }

    public function find($id)
    {
        $contact = Contact::find($id);
        if (!$contact) {
            return response()->json([
                'status' => 'error',
                'message' => 'Contact not found',
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $contact,
        ]);
    }

    public function add(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string',
            'address_id' => 'required|exists:addresses,id',
        ]);

        $contact = Contact::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Contact created successfully',
            'data' => $contact,
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string',
            'address_id' => 'required|exists:addresses,id',
        ]);

        $contact = Contact::find($id);
        if (!$contact) {
            return response()->json([
                'status' => 'error',
                'message' => 'Contact not found',
            ], 404);
        }

        $contact->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Contact updated successfully',
            'data' => $contact,
        ]);
    }

    public function delete($id)
    {
        $contact = Contact::find($id);
        if (!$contact) {
            return response()->json([
                'status' => 'error',
                'message' => 'Contact not found',
            ], 404);
        }

        $contact->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Contact deleted successfully',
        ]);
    }
}
